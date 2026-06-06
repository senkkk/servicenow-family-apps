import '@servicenow/sdk/global'
import { ServicePortal, SPMenu, SPPage } from '@servicenow/sdk/core'
import { familyCatalog } from './catalog/family-catalog.now'
import { tableListSelectorWidget } from './sp-widgets/table-list-selector.now'
import { tableListResultsWidget } from './sp-widgets/table-list-results.now'

const OOTB = {
    theme: {
        coral: '281507c44317d210ca4c1f425db8f2fd',
    },
    widget: {
        approvals: 'f37aa302cb70020000f8d856634c9cfc',
        headerMenu: '5ef595c1cb12020000f8d856634c9c6e',
        homepageSearch: '200fbd96cb20020000f8d856634c9ca1',
        myRequests: 'f1672671d7301200a9addd173e24d47d',
        recentAndPopularItems: 'sc-recent-popular',
    },
    page: {
        approvals: 'd3485112cb13310000f8d856634c9c3e',
        catalog: '53261e3487100300e0ef0cf888cb0b7c',
        knowledge: 'db9fcab847101200ba13a5554ee490cf',
        login: '6995a144cb11120000f8d856634c9c25',
        notFound: '3c2c9063cb11020000f8d856634c9c1f',
        requests: '31ed6a51d7130200a9ad1e173e24d479',
        search: '87466b63c3223100c8b837659bba8feb',
        userProfile: 'edcbce64d710120023c84f80de610305',
    },
} as const

export const familyPortalHomePage = SPPage({
    pageId: 'family-home',
    title: 'ファミリーポータル',
    shortDescription: '家族向けセルフサービスのホームページです。',
    css: `
.family-home-search-hero {
    min-height: 360px;
    background-position: center;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
}

.family-home-search-hero::before {
    background: rgba(255, 255, 255, 0.68);
    content: "";
    inset: 0;
    position: absolute;
}

.family-home-search-hero .row {
    padding: 96px 24px;
    position: relative;
    z-index: 1;
}

@media (max-width: 767px) {
    .family-home-search-hero {
        min-height: 220px;
    }

    .family-home-search-hero .row {
        padding: 56px 16px;
    }
}
`,
    containers: [
        {
            $id: 'family_home_search_container',
            name: '検索',
            width: 'container',
            backgroundImage: Now.attach('../assets/family-portal-home.png'),
            backgroundStyle: 'cover',
            cssClass: 'family-home-search-hero',
            order: 100,
            rows: [
                {
                    $id: 'family_home_search_row',
                    order: 100,
                    columns: [
                        {
                            $id: 'family_home_search_column',
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: 'family_home_search_instance',
                                    id: 'family-home-search',
                                    widget: OOTB.widget.homepageSearch,
                                    order: 100,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            $id: 'family_home_activity_container',
            name: 'アクティビティ',
            width: 'container',
            order: 200,
            rows: [
                {
                    $id: 'family_home_activity_row',
                    order: 100,
                    columns: [
                        {
                            $id: 'family_home_requests_column',
                            size: 4,
                            sizeSm: 6,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: 'family_home_requests_instance',
                                    id: 'family-home-requests',
                                    title: '自分の申請',
                                    widget: OOTB.widget.myRequests,
                                    glyph: 'list',
                                    order: 100,
                                },
                            ],
                        },
                        {
                            $id: 'family_home_approvals_column',
                            size: 4,
                            sizeSm: 6,
                            sizeXs: 12,
                            order: 200,
                            instances: [
                                {
                                    $id: 'family_home_approvals_instance',
                                    id: 'family-home-approvals',
                                    title: '承認',
                                    widget: OOTB.widget.approvals,
                                    glyph: 'check-square-o',
                                    order: 100,
                                },
                            ],
                        },
                        {
                            $id: 'family_home_recent_popular_column',
                            size: 4,
                            sizeSm: 12,
                            sizeXs: 12,
                            order: 300,
                            instances: [
                                {
                                    $id: 'family_home_recent_popular_instance',
                                    id: 'family-home-recent-popular',
                                    title: '最近・人気のアイテム',
                                    widget: OOTB.widget.recentAndPopularItems,
                                    glyph: 'clock-o',
                                    order: 100,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})


export const familyPortalListSearchPage = SPPage({
    pageId: 'family-list-search',
    title: '一覧表示・検索',
    shortDescription: 'テーブルを選択して標準一覧ウィジェットで表示・検索するページです。',
    containers: [
        {
            $id: 'family_list_search_container',
            name: '一覧表示・検索',
            width: 'container',
            order: 100,
            rows: [
                {
                    $id: 'family_list_search_selector_row',
                    order: 100,
                    columns: [
                        {
                            $id: 'family_list_search_selector_column',
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: 'family_list_search_selector_instance',
                                    id: 'family-list-search-selector',
                                    widget: tableListSelectorWidget,
                                    order: 100,
                                },
                            ],
                        },
                    ],
                },
                {
                    $id: 'family_list_search_table_row',
                    order: 200,
                    columns: [
                        {
                            $id: 'family_list_search_table_column',
                            size: 12,
                            sizeXs: 12,
                            order: 100,
                            instances: [
                                {
                                    $id: 'family_list_search_table_instance',
                                    id: 'family-list-search-table',
                                    title: '検索結果',
                                    widget: tableListResultsWidget,
                                    glyph: 'search',
                                    order: 100,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export const familyPortalMainMenu = SPMenu({
    $id: 'family_portal_main_menu',
    title: 'ファミリーポータルメニュー',
    widget: OOTB.widget.headerMenu,
    items: [
        {
            $id: 'family_portal_menu_home',
            label: 'ホーム',
            type: 'page',
            page: familyPortalHomePage,
            glyph: 'home',
            order: 100,
        },
        {
            $id: 'family_portal_menu_catalog',
            label: '申請',
            type: 'page',
            page: OOTB.page.catalog,
            glyph: 'briefcase',
            order: 200,
        },
        {
            $id: 'family_portal_menu_my_requests',
            label: '状況',
            type: 'page',
            page: OOTB.page.requests,
            glyph: 'list',
            order: 300,
        },
        {
            $id: 'family_portal_menu_list_search',
            label: '一覧表示・検索',
            type: 'page',
            page: familyPortalListSearchPage,
            glyph: 'search',
            order: 350,
        },
        {
            $id: 'family_portal_menu_approvals',
            label: '承認',
            type: 'page',
            page: OOTB.page.approvals,
            glyph: 'check-square-o',
            order: 400,
        },
        {
            $id: 'family_portal_menu_knowledge',
            label: 'ナレッジ',
            type: 'page',
            page: OOTB.page.knowledge,
            glyph: 'book',
            order: 500,
        },
    ],
})

export const familyPortal = ServicePortal({
    $id: 'family_portal',
    title: 'ファミリーポータル',
    urlSuffix: 'family',
    theme: OOTB.theme.coral,
    mainMenu: familyPortalMainMenu,
    homePage: familyPortalHomePage,
    loginPage: OOTB.page.login,
    notFoundPage: OOTB.page.notFound,
    catalogHomePage: OOTB.page.catalog,
    catalogs: [
        {
            catalog: familyCatalog,
            order: 100,
            active: true,
        },
    ],
    knowledgeHomePage: OOTB.page.knowledge,
    enableFavorites: true,
})
