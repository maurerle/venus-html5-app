import React from "react"
import { Card, SIZE_NARROW, SIZE_SHORT } from "../../../components/Card"
import { useDcLoads, useSendUpdate } from "../../../modules"
import { CRITICAL_MULTIPLIER, DC_CONF } from "../../utils/constants"

import "./DcLoads.scss"
import NumericValue from "../../../components/NumericValue"
import { normalizePower } from "../../utils/helpers"
import GaugeIndicator from "../../../components/GaugeIndicator"

export const DcLoads = () => {
  const { voltage, current, power } = useDcLoads()

  const powerMax = (voltage ?? 1) * 60 * CRITICAL_MULTIPLIER
  const normalizedPower = normalizePower(power ?? 0, powerMax)
  useSendUpdate(normalizedPower, DC_CONF, "DC Loads")

  return (
    <Card title={"DC Loads"} size={[SIZE_SHORT, SIZE_NARROW]}>
      <div className="gauge">
        <GaugeIndicator value={power} percent={normalizedPower} parts={DC_CONF.THRESHOLDS} unit={"W"} gauge={false} />
        <div className={"info-bar"}>
          <div className={"info-bar__cell"}>
            <NumericValue value={voltage} unit={"V"} precision={2} />
          </div>
          <div className={"info-bar__cell"}>
            <NumericValue value={current} unit={"A"} precision={1} />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default DcLoads
