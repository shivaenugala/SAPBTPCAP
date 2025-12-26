sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'elearningapp',
            componentId: 'CoursesObjectPage',
            contextPath: '/Categories/courses'
        },
        CustomPageDefinitions
    );
});