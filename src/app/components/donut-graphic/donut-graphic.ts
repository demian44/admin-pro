import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

export class DonutGraphic {

    data: MultiDataSet;
    
    information: string;

    labels: Label[];
    
    type: ChartType;

    constructor(data: MultiDataSet, information: string, labels: Label[], type: ChartType) {
        this.data = data;
        this.information = information;
        this.labels = labels;
        this.type = type;
    }
}

