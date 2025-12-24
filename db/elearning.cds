namespace app.elearning;
using { Language, managed } from '@sap/cds/common';
type String50 : String(50);
entity Categories {
 key ID          : UUID;
     name        : String50;
     description : String(100);
     courses     : Association to many Courses
                   on courses.category = $self;
}
entity Courses : managed {
 key category   : Association to Categories;
 key course_ID  : UUID;
     courseName : String50;
     price      : String(10);
     language   : Language;
}