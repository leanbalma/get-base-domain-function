/* To keep the example simpliest, I just created an array of 5 suffixes.
 * The complete list should be downloaded from 
 * https://publicsuffix.org/list/public_suffix_list.dat
 */
var domainSuffixes = ['co.uk', 'com', 'com.ar', 'org', 'io'];

/* String getBaseDomain(String)
 * Returns an empty string if any domain suffix is found.
 * Returns an empty string if the input domain is either null or undefined.
 */
function getBaseDomain(inputDomain) {
  if(!inputDomain) {
    return '';
  }

  var baseDomain = '';
  var domainSuffix = '';
  domainSuffixes.forEach( function(element) {
    // Check if the suffix is contained into the domain.
    if(inputDomain.indexOf(element) > -1 ) {
      // This is to ensure that suffixes like 'co.uk' are taken over 'co'
      if(element.split('.').length >= domainSuffix.split('.').length) {
        domainSuffix = element;
        // Remove the domain suffix.
        var inputDomainWOPreffixes = inputDomain.replace(element, '');
        // Split the remaining text by dots and take the last one.
        var domainArray = inputDomainWOPreffixes.split('.');
        baseDomain = domainArray[domainArray.length - 2] + '.' + domainSuffix;
      }
    }
  });

  return baseDomain;
}

var someDomain = 'subdomain.example.co.uk';
var baseDomain = getBaseDomain(someDomain);
console.log(baseDomain);
