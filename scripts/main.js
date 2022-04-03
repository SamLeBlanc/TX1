const main = () => {
  addSource()
  addFillLayer()
  addLineLayer()
  addHighlightLayer()
  loadDataFromCSV()
  colorMap()
  createLegend()
  startMousefollower()
  hoverSetup()
  setTimeout(() => {
    setFeatStates()
  }, 500);
}
