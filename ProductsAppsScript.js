/**
 * SCRIPT FOR PRODUCT DETAIL QUOTE REQUESTS (requested quote)
 * Copy this code into the Apps Script editor for the script URL ending in ...hI-i/exec
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Find the "requested quote" tab (case-insensitive)
    var sheet = null;
    var sheets = ss.getSheets();
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getName().toLowerCase() === "requested quote") {
        sheet = sheets[i];
        break;
      }
    }

    // Create the sheet if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet("requested quote");
    }

    // Get headers
    var lastCol = sheet.getLastColumn();
    var headers = [];
    if (lastCol > 0) {
      headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    } else {
      // Create default headers if empty
      headers = ["Timestamp", "Product Name", "Selected Color", "Selected Size", "Name", "Email", "Phone", "Quantity", "Message"];
      sheet.appendRow(headers);
    }

    // Map form inputs to sheet headers
    var newRow = [];
    for (var j = 0; j < headers.length; j++) {
      var header = headers[j];
      if (header.toLowerCase() === "timestamp") {
        newRow.push(new Date());
        continue;
      }

      var normHeader = header.toLowerCase().replace(/[\s_-]+/g, "");
      var foundVal = "";
      for (var key in e.parameter) {
        var normKey = key.toLowerCase().replace(/[\s_-]+/g, "");
        if (normKey === normHeader) {
          foundVal = e.parameter[key];
          break;
        }
      }
      newRow.push(foundVal);
    }

    sheet.appendRow(newRow);

    // Highlight headers nicely (bold, gray background, freeze header row)
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#F3F4F6");
    if (sheet.getFrozenRows() === 0) {
      sheet.setFrozenRows(1);
    }

    return ContentService.createTextOutput(
      JSON.stringify({ "result": "success", "sheet": sheet.getName() })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ "result": "error", "error": error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Tweens Product Quote Request Apps Script active.");
}
