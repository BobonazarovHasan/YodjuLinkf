export const  api= {
    login: '/login',
    userMe: '/user/me',
    register:'/register',

//         ABITURIENT       //

    getAbiturientAddressCityAll:'/abiturient/address/city/all/',

    getAbiturientEducationSchoolAll:'/abiturient/education/school/all',
    getAbiturientEducation:'/abiturient/education/',

    getAbiturientAddressCountryAll:'/abiturient/address/Country/all/',

    getAbiturientAddressRegionAll:'/abiturient/address/Region/all/',

    getAbiturientApplicationDiplomaFile:'/abiturient/application/diploma/file/',
    addAbiturientApplicationDiplomaFile:'/abiturient/application/diploma/file/',
    deleteAbiturientApplicationDiplomaFile:'/abiturient/application/diploma/file/',

    getAbiturientApplicationLanguageFile:'/abiturient/application/language/file/',
    addAbiturientApplicationLanguageFile:'/abiturient/application/language/file/',
    deleteAbiturientApplicationLanguageFile:'/abiturient/application/language/file/',

    getAbiturientApplicationPassportFile:'/abiturient/application/passport/file/',
    addAbiturientApplicationPassportFile:'/abiturient/application/passport/file/',
    deleteAbiturientApplicationPassportFile:'/abiturient/application/passport/file/',

    getAbiturientApplicationPhotoFile:'/abiturient/application/photo/file/',
    addAbiturientApplicationPhotoFile:'/abiturient/application/photo/file/',
    deleteAbiturientApplicationPhotoFile:'/abiturient/application/photo/file/',

    getAbiturientApplicationFirst:'/abiturient/application/first-step/',
    addAbiturientApplicationFirst:'/abiturient/application/first-step/',

    getAbiturientApplicationSecond:'/abiturient/application/second-step/',
    addAbiturientApplicationSecond:'/abiturient/application/second-step/',




//         ADMIN        //

    getEducationLanguage: '/admin/education-language/',
    addEducationLanguage: '/admin/education-language/',
    editEducationLanguage: '/admin/education-language/',


    getEducationType: '/admin/education-type/',
    addEducationType: '/admin/education-type/',
    editEducationType: '/admin/education-type/',


    getEducationFaculty: '/admin/education-faculty/',
    addEducationFaculty: '/admin/education-faculty/',
    editEducationFaculty: '/admin/education-faculty/',


    getEducationSchool: '/admin/school/',
    addEducationSchool: '/admin/school/',
    editEducationSchool: '/admin/school/',


    getEducationScience: '/admin/science/',
    addEducationScience: '/admin/science/',
    editEducationScience: '/admin/science/',


    getAdminApplication: '/admin/application',
    addAdminApplication: '/admin/application',
    getAdminApplicationAccepted: '/admin/application/accepted',
    getAdminApplicationRejected: '/admin/application/rejected',
    getAdminApplicationSubmitted: '/admin/application/submitted',

    getAdminMember:'/admin/admin-member/',
    getAdminMemberRoles:'/admin/admin-member/roles',
    addAdminMember:'/admin/admin-member/',
    editAdminMember:'/admin/admin-member/',


    getAdminCity:'/admin/city/',
    addAdminCity:'/admin/city/',
    editAdminCity:'/admin/city/',


    getAdminCountry:'/admin/country/',
    addAdminCountry:'/admin/country/',
    editAdminCountry:'/admin/country/',


    getAdminRegion:'/admin/region/',
    addAdminRegion:'/admin/region/',
    editAdminRegion:'/admin/region/',


    getAdminStatisticsDaily:'/admin/statistics/daily',
    getAdminStatisticsFaculty:'/admin/statistics/faculty',
    getAdminStatisticsGender:'/admin/statistics/gender',
    getAdminStatisticsRegional:'/admin/statistics/regional',


    getAdminForeignLanguage:'/admin/foreign-language-proficiency/',
    addAdminForeignLanguage:'/admin/foreign-language-proficiency/',
    editAdminForeignLanguage:'/admin/foreign-language-proficiency/',


    getAdminDefault:'/admin/admission-session/',
    addAdminDefault:'/admin/admission-session/',
    editAdminDefault:'/admin/admission-session/',
    deleteAdminDefault:'/admin/admission-session/',
    optionsAdminDefault:'/admin/admission-session/',
    headAdminDefault:'/admin/admission-session/',
    patchAdminDefault:'/admin/admission-session/',


    getAdminDisability:'/admin/disability/',
    addAdminDisability:'/admin/disability/',
    editAdminDisability:'/admin/disability/',

}


