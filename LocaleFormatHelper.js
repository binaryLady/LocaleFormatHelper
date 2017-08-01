//Locale mapping class to be used with Moment.JS
//mapping matches supported SFDC locales
//Sonia Cook-Broen April, 2017

var format = function getFormatting(loc) {
    //Returns formatting for user locale to be used in date 
    //all locales converted to lowercase to simplify compare
    
	var dFormat = '';
	locale = loc.toLowerCase();
    switch (true) {
        case locale.indexOf('en_us') !== -1:
            dFormat = 'MM/DD/YYYY';
            break;
        case locale.indexOf('de') !== -1:
        case locale.indexOf('fi') !== -1:
        case 'it_ch':
            dFormat = 'DD.MM.YYYY';
            break;
        case locale.indexOf('cn') !== -1:
            dFormat = 'YYYY-MM-DD';
            break;
        case locale.indexOf('fr_BE') !== -1:
       	case locale.indexOf('nl_be') !== -1:
            dFormat = 'DD/MM/YYYY';
            break;
        case locale.indexOf('dk') !== -1:
       	case locale.indexOf('nl') !== -1:
            dFormat = 'DD-MM-YYYY';
            break;
        case locale.indexOf('fr_ca') !== -1:
       	case locale.indexOf('sv_se') !== -1:
            dFormat = 'YYYY-MM-DD';
            break;
        default:
            dFormat = 'DD/MM/YYYY';
            break;


    }
	return dFormat;


}
