
import {
    tableTemplate,
    tableData,
    tableComputed,
    tableMethods
} from "./lib/table"
import {
    pagerTemplate,
    pagerMethods
} from "./lib/pager"
import {
    headerTemplate,
    headerData,
    headerMethods
} from "./lib/header"
import {
    modalTemplate,
    modalData,
    modalMethods
} from "./lib/modal"


export const pageData = {
    ...tableData,
    ...headerData,
    ...modalData
}

export const pageMethods = {
    ...headerMethods,
    ...tableMethods,
    ...headerMethods,
    ...pagerMethods,
    ...modalMethods
}

export const pageComputed = {
    ...tableComputed
}

export const pageTemplate = (res: any) => {
    return `
    <div>
        ${headerTemplate(res)}
        ${tableTemplate(res)}
        ${pagerTemplate(res)}
        ${modalTemplate(res)}
    </div>
    `

}