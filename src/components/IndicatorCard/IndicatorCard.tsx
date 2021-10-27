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
        <div className="text-custom-primary w-full md:w-1/2 lg:w-1/3 px-2 lg:px-4 mb-6">
            <div className="border-b border-custom-primary border-opacity-30 pb-4 mb-3">
                <span className="text-5xl font-light">{topic}</span>
            </div>

            <div className="flex mb-2">
                <div>
                    <div>
                        <span className="text-4xl font-noraml">
                            {numberWithCommas(indicatorVal)}
                        </span>
                    </div>

                    <div className="max-w-indicator-name">
                        <span className="text-2xl font-light">
                            {indicatorName}
                        </span>
                    </div>
                </div>

                <div className="flex-grow ml-1 h-24 bg-black">chart</div>
            </div>

            <div className="text-gray-400">
                <span className="text-sm">source: {source}</span>
            </div>
        </div>
    );
};

export default IndicatorCard;
