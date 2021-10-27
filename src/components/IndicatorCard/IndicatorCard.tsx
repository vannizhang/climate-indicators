import React from 'react';
import { numberWithCommas } from 'helper-toolkit-ts/dist/number';

type Props = {
    topic: string;
    indicatorName: string;
    indicatorVal: number;
    timeseriesData: number[];
    source: string;
    link?: string;
};

const IndicatorCard: React.FC<Props> = ({
    topic,
    indicatorName,
    indicatorVal,
    timeseriesData,
    source,
    link,
}: Props) => {
    return (
        <div className="text-primary">
            <div className="border-b border-gray-200 pb-4 mb-3">
                <span className="text-5xl font-light">{topic}</span>
            </div>

            <div className="flex">
                <div>
                    <div>
                        <span className="text-4xl font-light">
                            {numberWithCommas(indicatorVal)}
                        </span>
                    </div>

                    <div className="max-w-indicator-name">
                        <span className="text-2xl font-light">
                            {indicatorName}
                        </span>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="text-gray-400">
                <span>source: {source}</span>
            </div>
        </div>
    );
};

export default IndicatorCard;
