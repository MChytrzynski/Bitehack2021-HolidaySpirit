// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const path = require("path");
const fs = require("fs-extra");
const Diff = require("diff");
const { Console } = require("console");
const fetch = require("node-fetch");
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

  postIssue();

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
    
    <form action="/action_page.php">
      <label for="title">Titl:</label><br>
      <input type="text" id="title" name="title" value="TestTitle"><br>
      <label for="content">Content:</label><br>
      <input type="text" id="content" name="content" value="TestContent"><br><br>
      <label for="content">Tags:</label><br>
      <input type="text" id="tags" name="tags" value="tag1, tag2"><br><br>
      <label for="code">Code:</label><br>
      <input type="text" id="code" name="code" value=""><br><br>
      <label for="url">Url:</label><br>
      <input type="text" id="url" name="url" value="TestUrl"><br><br>
      <input type="submit" value="Submit">
    </form> 

    <script>
		const inputField = document.getElementById("code");
		window.addEventListener('message', (event) => {
		  const message = event.data;
		  
		  inputField.value = JSON.stringify(message);
		});
    </script>

	</body>
	</html>`;
}

// async function postIssue() {
//   console.log('postIssue():');
//   const requestBody = ('{"username":"TestUser","title":"TestTitle","content":"TestContent","tags":[{"name":"TestTagName1"},{"name":"TestTagName2"}],"solution":{"content":"TestSolutionContent","attachements":["iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAUSURBVChTY/i/7iQeNCqNBa07CQAfkfYZ8P5OvAAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAUSURBVChTY/i/7iQeNCqNBa07CQAfkfYZ8P5OvAAAAABJRU5ErkJggg=="],"urls":["https://www.bitehack.best.krakow.pl/","https://www.pk.edu.pl/"],"code":["const slides = document.getElementsByClassName(\u0022img-slides\u0022) as HTMLCollectionOf \u003CHTMLElement\u003E;\r\nconst dots = document.getElementsByClassName(\u0022images\u0022) as HTMLCollectionOf \u003CHTMLElement\u003E;\r\nslides[0].style.display = \u0022blsad\u0022;","const slides = document.getElementsByClassName(\u0022img-slides\u0022) as HTMLCollectionOf \u003CHTMLElement\u003E;\r\nconst dots = document.getElementsByClassName(\u0022images\u0022) as HTMLCollectionOf \u003CHTMLElement\u003E;\r\nslides[0].style.display = \u0022blsad\u0022;"]},"isPrivate":false,"date":"2021-01-17T03:10:04.0832577+01:00"}');
//   const response = await fetch('http://localhost:57569/api/issues', {
//       method: 'POST',
//       body: requestBody, // string or object
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   const responseJSON = await response.json(); //extract JSON from the http response
//   console.log(responseJSON);
//   // do something with myJson
// }

async function postIssue() {
  console.log("postIssue()");
  var myHeaders = new fetch.Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"username":"TestUser","title":"TestTitle","content":"TestContent","tags":[{"name":"TestTagName1"},{"name":"TestTagName2"}],"solution":{"content":"TestSolutionContent","attachements":["iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAUSURBVChTY/i/7iQeNCqNBa07CQAfkfYZ8P5OvAAAAABJRU5ErkJggg==","iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAUSURBVChTY/i/7iQeNCqNBa07CQAfkfYZ8P5OvAAAAABJRU5ErkJggg=="],"url":"https://www.bitehack.best.krakow.pl/","code":"const slides = document.getElementsByClassName(\"img-slides\") as HTMLCollectionOf <HTMLElement>;\r\nconst dots = document.getElementsByClassName(\"images\") as HTMLCollectionOf <HTMLElement>;\r\nslides[0].style.display = \"cock\";"},"isPrivate":false,"date":"2021-01-17T04:39:52.6228846+01:00"});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const response = await fetch("http://localhost:57569/api/issues", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    // const responseJSON = await response.json(); //extract JSON from the http response
    // console.log(responseJSON);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
