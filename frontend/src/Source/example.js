export function dbExample(){
    return {
        rows: [
            {favorite: false, id: 0, name: 'Urology Report', last_updated: new Date('2021-12-17T03:24:00').toJSON(), field: 'Urology', creator: 'Andreis PURIM', creator_id: 1201, uses: 0},
            {favorite: false, id: 1, name: 'Respiratory', last_updated: new Date('2021-12-15T03:24:00').toJSON(), field: 'Respiratory', creator: 'Andreis PURIM', creator_id: 1201, uses: 1},
            {favorite: false, id: 2, name: 'Dermatology', last_updated: new Date('2021-12-14T03:24:00').toJSON(), field: 'Skin', creator: 'Katia MALTA', creator_id: 761, uses: 12}
        ],
        columns: [
            { id: 'favorite', label: 'Favorite', minWidth: 0, align: 'center'},
            { id: 'name', label: 'Name', minWidth: 170, align: 'left'},
            { id: 'field', label: 'Field', minWidth: 100, align: 'right' },
            { id: 'creator', label: 'Creator', minWidth: 100, align: 'right' },
            { id: 'uses', label: 'Uses', minWidth: 100, align: 'right' },
        ],
        users: {
            andreis:
                {   id: 1201, username: 'andreis', password:'123', admin: true, firstname: 'Andreis', lastname: 'PURIM', description: 'Student at Centrale Lille', joined: 2021,
                    avatar: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/73016392_1274661512720825_8805041118417780736_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=l5ggB89DXWUAX_5KUx1&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9UWpkSKdZ2-KVxzvSAfRFAE6W3eFLY1x8zbOvWiukqyw&oe=61F0A75C', 
                    chips: [
                        {type: 'work', label: 'CHU Lille'},
                        {type: 'study', label: 'Centrale Lille'},
                        {type: 'favorites', label: '0 Favorites'},
                        {type: 'created', label: '0 Created'},
                    ],
                    favorites: [0],
                    recents: [
                        {id: 0, date: new Date('2021-12-14T03:24:00').toJSON()}
                    ],
                    created: [0]
                }, 
        }
    }
}