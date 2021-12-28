export function createExample(){
    return {
        rows: [
            {favorite: false, id: 0, name: 'Urology Report', last_updated: "2020/21/12", field: 'Urology', creator: 'Andreis PURIM', last_used: null, uses: 0},
            {favorite: false, id: 1, name: 'Respiratory', last_updated: "2018/01/21", field: 'Respiratory', creator: 'Andreis PURIM', last_used: null, uses: 0}
        ],
        columns: [
            { id: 'favorite', label: 'Favorite', minWidth: 0, align: 'center'},
            { id: 'name', label: 'Name', minWidth: 170, align: 'left'},
            { id: 'field', label: 'Field', minWidth: 100, align: 'right' },
            { id: 'creator', label: 'Creator', minWidth: 100, align: 'right' },
            { id: 'uses', label: 'Uses', minWidth: 100, align: 'right' },
        ]
    }
}

