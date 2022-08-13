import "./chart.scss";
import { DEXSCREENER_URL } from "src/constants/data";

function Chart() {
    return (
        <div className="chart-view">
            <iframe src={`${DEXSCREENER_URL}?embed=1&theme=dark&trades=0&info=0`} height="660px" width="100%" />
        </div>
    );
}

export default Chart;
