import { Leafer, Rect, RectData, registerUI, dataProcessor, boundsType } from 'leafer-ui'
import { IRectInputData, IRectData } from '@leafer-ui/interface'


// 1. 在数据接口中添加属性

export interface ICustomInputData extends IRectInputData {
    left?: number | string // 输入数据，必须为可选
}

export interface ICustomData extends IRectData {
    left?: number // 计算数据，必须为可选
}

export class CustomData extends RectData implements ICustomData {
}

@registerUI()
export class Custom extends Rect {

    public get __tag() { return 'Custom' }

    @dataProcessor(CustomData)
    declare public __: ICustomData

    // 2. 添加属性，并指定属性处理器
    @boundsType(0)
    declare public left: number | string

    constructor(data?: ICustomInputData) {
        super(data)
        console.log('this.))_',this.__)
    }

}
