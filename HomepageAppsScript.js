/**
 * SCRIPT FOR HOMEPAGE FORM (sheet1)
 * Copy this code into the Apps Script editor for the script URL ending in ...Cz/exec
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Find the "sheet1" tab (case-insensitive)
    var sheet = null;
    var sheets = ss.getSheets();
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getName().toLowerCase() === "sheet1") {
        sheet = sheets[i];
        break;
      }
    }
    
    // Fallback to the first sheet if "sheet1" tab does not exist
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }
    
    // Get headers
    var lastCol = sheet.getLastColumn();
    var headers = [];
    if (lastCol > 0) {
      headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    } else {
      // Create headers if empty
      headers = ["Timestamp", "Name", "Email", "Phone", "Enquiry Type", "Short Info"];
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
  return ContentService.createTextOutput("Tweens Homepage Apps Script active.");
}
