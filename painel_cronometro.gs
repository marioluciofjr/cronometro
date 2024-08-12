function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Cronômetro')
    .addItem('Abrir Painel', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('cronometro')
      .setTitle('Cronômetro')
      .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}
