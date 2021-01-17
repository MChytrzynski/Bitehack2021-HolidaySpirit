// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const path = require("path");
const fs = require("fs-extra");
const Diff = require("diff");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "holiday-spirit" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "holiday-spirit.helloWorld",
    function () {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World from Holiday Spirit!");
    }
  );

  context.subscriptions.push(disposable);
  const panel = vscode.window.createWebviewPanel(
    "holidaySpirit",
    "Holiday Spirit",
    vscode.ViewColumn.Two,
    {
      enableScripts: true,
    }
  );

  /*const filePath = vscode.Uri.file(
    path.join(context.extensionPath, "html", "addItem.html")
  );/panel.webview.html = fs.readFileSync(filePath.fsPath, "utf8");*/

  panel.webview.html = getWebViewContent();

  const watchPath = vscode.workspace.workspaceFolders[0].uri.fsPath;

  const tempPath = vscode.workspace.workspaceFolders[0].uri.fsPath + "temp";

  let undispos = vscode.commands.registerCommand(
    "holiday-spirit.startWatch",
    function () {
      /*fs.copy(watchPath, tempPath, (err) => {
        if (err) return console.error(err);
        console.log("success!");
	  });*/

      fs.readdir(watchPath, function (err, files) {
        if (err) {
          return console.log("Unable to scan directory: " + err);
        }

        files.forEach(function (file) {
          if (file != "temp") {
            fs.copy(watchPath + "\\" + file, tempPath + "\\" + file, (err) => {
              if (err) return console.error(err);
              console.log("success!");
            });
          }
        });
      });
    }
  );
  context.subscriptions.push(undispos);

  let findDiffs = vscode.commands.registerCommand(
    "holiday-spirit.findDiff",
    function () {
      fs.readdir(watchPath, function (err, files) {
        files.forEach(function (file) {
          if (file != "temp") {
            fs.readFile(watchPath + "\\" + file, (error, data) => {
              if (error) {
                console.error(error);
                return;
              }
              getData(data.toString(), tempPath, file);
            });
          }
        });
      });
    }
  );

  context.subscriptions.push(findDiffs);

  context.subscriptions.push(
    vscode.commands.registerCommand("holiday-spirit.update", () => {
      if (!panel) {
        return;
      }

      // Send a message to our webview.
      // You can send any JSON serializable data.
      console.log("xx");
      //panel.webview.postMessage({ command: 'refactor' });
    })
  );

  function getData(content, tmp, filename) {
    fs.readFile(tmp + "\\" + filename, (error, data) => {
      if (error) {
        console.error(error);
        return;
      }
      compareData(content, data.toString());
    });
  }

  function compareData(f1, f2) {
    const diff = Diff.diffLines(f2, f1);
    let changes = [];
    diff.forEach((element) => {
      if (element.removed || element.added) {
        console.log(element);
        changes.push(element);
      }
    });
    panel.webview.postMessage({changes});
  }
}
function getWebViewContent() {
  return `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<h1>Holiday Spirit Issue Tracker</h1>
		<p id="tester">ss</p>

		<script>
		const textField = document.getElementById("tester");
		window.addEventListener('message', (event) => {
		  const message = event.data;
		  
		  textField.innerHTML = JSON.stringify(message);
		});
	  </script>

	</body>
	</html>`;
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
