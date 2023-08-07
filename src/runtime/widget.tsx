import { React, type AllWidgetProps,IMState,State } from 'jimu-core'
import { type IMConfig } from '../config'

interface ExtraProps{
  pTimeLineTcoDates: any
}


//const Widget = (props: AllWidgetProps<IMConfig>) => {
export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig> & ExtraProps, State>{
  
  constructor (props) {
    super(props)
  }

  

  static mapExtraStateProps = (stateI: IMState, ownProps: AllWidgetProps<IMConfig>): ExtraProps => {
    let wId: string;
    for (const [key, value] of Object.entries(stateI.widgetsState)) {
      if(value.pTimeLineTcoDates){
        wId = key;
      }
    }
    
    return {
      pTimeLineTcoDates: stateI.widgetsState[wId]?.pTimeLineTcoDates
    }
  }

  datefy=(dateStr:number) => {
    if(dateStr){
      return new Date(dateStr)
    }
    return ''
  };

  render () {
    return (
      <div className="widget-demo jimu-widget m-2">
        <p>Start Date: {this.props?.pTimeLineTcoDates?.startDate}</p>
        <p>End Date: {this.props?.pTimeLineTcoDates?.endDate}</p>
      </div>
    )
  }
}

//export default Widget
