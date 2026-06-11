/**
 * Google Apps Script to log website form submissions to Google Sheets.
 * Handles both the Contact Form (Sheet1) and the Request Quote form (requested quote).
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // The exact sheet names in your Google Sheets
    var defaultSheetName = "sheet1";
    var quoteSheetName = "requested quote";
    
    // 1. Determine target sheet name
    var targetSheetName = defaultSheetName;
    if (e && e.parameter) {
      var requestedName = e.parameter.sheetName || 
                          e.parameter.sheet_name || 
                          e.parameter.sheet || 
                          e.parameter.tab_name || 
                          e.parameter.tab;
                          
      // If the sheet name requested contains "quote", use "requested quote"
      if (requestedName && requestedName.toLowerCase().indexOf("quote") !== -1) {
        targetSheetName = quoteSheetName;
      }
    }
    
    // 2. Find the sheet (case-insensitive match to prevent naming mismatch issues)
    var sheet = null;
    var sheets = ss.getSheets();
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getName().toLowerCase() === targetSheetName.toLowerCase()) {
        sheet = sheets[i];
        break;
      }
    }
    
    // If the sheet doesn't exist, create it
    if (!sheet) {
      sheet = ss.insertSheet(targetSheetName);
    }
    
    // 3. Setup headers if the sheet is empty
    var lastCol = sheet.getLastColumn();
    var headers = [];
    if (lastCol > 0) {
      headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
    } else {
      if (targetSheetName === quoteSheetName) {
        headers = ["Timestamp", "Product Name", "Selected Color", "Selected Size", "Name", "Email", "Phone", "Quantity", "Message"];
      } else {
        headers = ["Timestamp", "Name", "Email", "Phone", "Enquiry Type", "Short Info"];
      }
      sheet.appendRow(headers);
    }
    
    // 4. Map the form input names to the sheet headers
    var newRow = [];
    for (var j = 0; j < headers.length; j++) {
      var header = headers[j];
      if (header.toLowerCase() === "timestamp") {
        newRow.push(new Date());
        continue;
      }
      
      // Normalize header to match form key (remove spaces, underscores, lowercase)
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
    
    // 5. Append the row of data
    sheet.appendRow(newRow);
    
    // 6. Format headers (make bold, gray background, freeze header row)
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
  return ContentService.createTextOutput("Tweens Google Sheets Web App Active. Please send a POST request.");
}
