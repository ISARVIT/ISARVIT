export function dbExample(){
    const andreis_avatar = 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/73016392_1274661512720825_8805041118417780736_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_ohc=l5ggB89DXWUAX_5KUx1&_nc_ht=scontent-cdt1-1.xx&oh=00_AT9UWpkSKdZ2-KVxzvSAfRFAE6W3eFLY1x8zbOvWiukqyw&oe=61F0A75C';
    const katia_avatar = 'https://i1.rgstatic.net/ii/profile.image/278835607162910-1443490997982_Q512/Katia-Purim.jpg'
    const urology_preview = 'http://services.epnet.com/getimage.aspx?imageiid=7432'
    const respiratory_preview = 'https://www.researchgate.net/profile/John-Magnussen/publication/13354345/figure/fig2/AS:601775111409672@1520485775964/Lung-scan-in-eight-standard-views-of-8-mm3-block-sizes-involving-42-of-lung-tissue-In.png'
    const dermatology_preview = 'https://i1.rgstatic.net/publication/309433994_Hydroxyurea_and_nonmelanoma_skin_cancers_Report_of_three_cases_and_review_of_the_literature/links/5810e8a408aef2ef97b2d07c/largepreview.png'
    return {
        rows: [
            {favorite: false, id: 0, name: 'Urology Report', last_updated: new Date('2021-12-17T03:24:00').toJSON(), field: 'Urology', creator: 'Andreis PURIM', preview: urology_preview, creator_avatar: andreis_avatar, dynamic_image: true, creator_id: 1201, keywords: ['Urology','CR'], questions: 2, uses: 0, description: 'This is a complete urology report made in 2020 for all urology based-scans used by the CHU Lille.'},
            {favorite: false, id: 1, name: 'Respiratory', last_updated: new Date('2021-12-15T03:24:00').toJSON(), field: 'Respiratory', creator: 'Andreis PURIM', preview: respiratory_preview, creator_avatar: andreis_avatar, dynamic_image: false, creator_id: 1201, keywords: ['Respiratory','CR'], questions: 3, uses: 1, description: 'A public CR created by the CHU Lille for respiratory scans used since 2018. It is release phase'},
            {favorite: false, id: 2, name: 'Dermatology', last_updated: new Date('2021-12-14T03:24:00').toJSON(), field: 'Skin', creator: 'Katia MALTA', preview: dermatology_preview, creator_avatar: katia_avatar, dynamic_image: false, creator_id: 761, keywords: ['Dermatology','Skin'], questions: 4, uses: 12, description: 'This is a standard medical report for all dermatologic scans in Brazil. In the current version it does not have a dynamic image'}
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
                    avatar: andreis_avatar, 
                    chips: [
                        {type: 'work', label: 'CHU Lille'},
                        {type: 'study', label: 'Centrale Lille'},
                        {type: 'favorites', label: '0 Favorites'},
                        {type: 'created', label: '0 Created'},
                    ],
                    favorites: [0],
                    recents: {
                        1: new Date('2021-12-14T03:24:00').toJSON()
                    },
                    created: [0,1]
                }, 
        }
    }
}