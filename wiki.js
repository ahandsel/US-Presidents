/**
 * Example API Call
 * `Presidency_of_George_Washington`
 * `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=Presidency_of_George_Washington&pithumbsize=100`
 */

// Article Titles of the US Presidents
const wikiPresidents = ['',
  'Presidency_of_George_Washington',
  'Presidency_of_John_Adams',
  'Presidency_of_Thomas_Jefferson',
  'Presidency_of_James_Madison',
  'Presidency_of_James_Monroe',
  'Presidency_of_John_Quincy_Adams',
  'Presidency_of_Andrew_Jackson',
  'Presidency_of_Martin_Van_Buren',
  'William_Henry_Harrison',
  'Presidency_of_John_Tyler',
  'Presidency_of_James_K._Polk',
  'Presidency_of_Zachary_Taylor',
  'Presidency_of_Millard_Fillmore',
  'Presidency_of_Franklin_Pierce',
  'Presidency_of_James_Buchanan',
  'Presidency_of_Abraham_Lincoln',
  'Presidency_of_Andrew_Johnson',
  'Presidency_of_Ulysses_S._Grant',
  'Presidency_of_Rutherford_B._Hayes',
  'James_A._Garfield',
  'Presidency_of_Chester_A._Arthur',
  'Presidencies_of_Grover_Cleveland',
  'Presidency_of_Benjamin_Harrison',
  'Presidencies_of_Grover_Cleveland',
  'Presidency_of_William_McKinley',
  'Presidency_of_Theodore_Roosevelt',
  'Presidency_of_William_Howard_Taft',
  'Presidency_of_Woodrow_Wilson',
  'Presidency_of_Warren_G._Harding',
  'Presidency_of_Calvin_Coolidge',
  'Presidency_of_Herbert_Hoover',
  'Franklin_D._Roosevelt',
  'Presidency_of_Harry_S._Truman',
  'Presidency_of_Dwight_D._Eisenhower',
  'Presidency_of_John_F._Kennedy',
  'Presidency_of_Lyndon_B._Johnson',
  'Presidency_of_Richard_Nixon',
  'Presidency_of_Gerald_Ford',
  'Presidency_of_Jimmy_Carter',
  'Presidency_of_Ronald_Reagan',
  'Presidency_of_George_H._W._Bush',
  'Presidency_of_Bill_Clinton',
  'Presidency_of_George_W._Bush',
  'Presidency_of_Barack_Obama',
  'Presidency_of_Donald_Trump',
  'Presidency_of_Joe_Biden'
];

const wikiTitle = 'Presidency_of_Joe_Biden';

function getPhotoLink(params) {
  let wikiTitle;
  if (params.includes('https://en.wikipedia.org/wiki/')) {
    wikiTitle = (URL).replace('https\:\/\/en\.wikipedia\.org\/wiki\/', '');
  } else {
    wikiTitle = params;
  }

  const wikiQuery = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${wikiTitle}&pithumbsize=100&format=json`;

  return new kintone.Promise(
    function (resolve, reject) {
      kintone.proxy(wikiQuery, 'GET', {}, {},
        function (resp) {
          let respJSON = JSON.parse(resp).query.pages;
          let pageid = Object.keys(respJSON)[0];
          console.log(`pageid: ${pageid}`);
          let imgURL = respJSON[pageid].thumbnail.source;
          console.log(`URL: ${URL}`);
          resolve(imgURL);
        },
        function (err) {
          console.log("Image URL Not Found");
          console.log(err);
          reject(err);
        }
      );
    }
  );
}