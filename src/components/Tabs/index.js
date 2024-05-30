import './index.css'

const Tabs = props => {
  const {tabsItems, changeTabId} = props
  const tabIsChanged = () => {
    changeTabId(tabsItems.tabId)
  }
  return (
    <li className="list-item">
      <h1 className="display-style" onClick={tabIsChanged}>
        {tabsItems.displayText}
      </h1>
    </li>
  )
}

export default Tabs
