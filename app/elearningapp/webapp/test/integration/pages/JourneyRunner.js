sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"elearningapp/test/integration/pages/CategoriesList",
	"elearningapp/test/integration/pages/CategoriesObjectPage",
	"elearningapp/test/integration/pages/CoursesObjectPage"
], function (JourneyRunner, CategoriesList, CategoriesObjectPage, CoursesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('elearningapp') + '/test/flp.html#app-preview',
        pages: {
			onTheCategoriesList: CategoriesList,
			onTheCategoriesObjectPage: CategoriesObjectPage,
			onTheCoursesObjectPage: CoursesObjectPage
        },
        async: true
    });

    return runner;
});

