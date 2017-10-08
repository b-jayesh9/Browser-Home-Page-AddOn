

// Listen to contextMenu when selected
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findSearchEngin(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}


// Create a set of context options for text-selection
browser.contextMenus.create({
  id: "archive.org",
  title: "Archive.org",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "translate",
  title: "Translate",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "hindi",
  title: "Hindi",
  contexts: ["selection"],
  parentId: "translate"
});

browser.contextMenus.create({
  id: "english",
  title: "English",
  contexts: ["selection"],
  parentId: "translate"
});
browser.contextMenus.create({
  id: "german",
  title: "German",
  contexts: ["selection"],
  parentId: "translate"
});
browser.contextMenus.create({
  id: "french",
  title: "French",
  contexts: ["selection"],
  parentId: "translate"
});
browser.contextMenus.create({
  id: "spanish",
  title: "Spanish",
  contexts: ["selection"],
  parentId: "translate"
});
browser.contextMenus.create({
  id: "tamil",
  title: "Tamil",
  contexts: ["selection"],
  parentId: "translate"
});
browser.contextMenus.create({
  id: "telugu",
  title: "Telugu",
  contexts: ["selection"],
  parentId: "translate"
});
browser.contextMenus.create({
  id: "trends",
  title: "Trends",
  contexts: ["selection"]
});




// Find the Search Engine query url to form the url for new tab
function findSearchEngin(searchEngText){

        if(searchEngText == 'archive.org'){
                return 'https://web.archive.org/web/*/';
        }
        else if(searchEngText == 'hindi'){
                return 'https://translate.google.com/#auto/hi/';
        }
		else if(searchEngText == 'english'){
                return 'https://translate.google.com/#auto/en/';
        }
        else if(searchEngText == 'french'){
                return 'https://translate.google.com/#auto/fr/';
        }
		
		else if(searchEngText == 'spanish'){
                return 'https://translate.google.com/#auto/es/';
        }
        else if(searchEngText == 'german'){
                return 'https://translate.google.com/#auto/de/';
        }
        else if(searchEngText == 'tamil'){
                return 'https://translate.google.com/#auto/ta/';
        }
        else if(searchEngText == 'telugu'){
                return 'https://translate.google.com/#auto/en/';
        }
        else if(searchEngText == 'trends'){
                return 'https://trends.google.com/trends/explore?q=';

        }
			return '';
        
}

