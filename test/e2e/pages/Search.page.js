export default class SearchPage {
    get searchInput() {
        return $('div .search-container .Search input');
    }

    get searchPreview() {
        return $('div .search-container .Search .content .SearchPreview');
    }

    get itemFound() {
        return $('div .search-container .Search .content .SearchPreview ul li a');
    }

    get productSection() {
        return $('.Product');
    }

    get productDescription() {
        return $('div .column-right-content .title');
    }

    type(param) {
        if (this.searchInput.isExisting()) {
            this.searchInput.setValue(param);
            this.searchInput.click();
            
        }
    }

    selectItem() {
        this.searchPreview.waitForEnabled();
        if (this.searchPreview.isExisting()) {
            this.itemFound.waitForEnabled();
            this.itemFound.click();
        }
    }

    validateProductSection() {
        this.productSection.waitForEnabled();
        if (this.productSection.isExisting()) {
            return true;
        }
        return false;
    }

    validateProductTitle() {
        this.productDescription.waitForEnabled();
        if (this.productDescription.isExisting()) {
            return this.productDescription.getText();
        }
        return false;
    }

    open() {
        browser.url('/');
    }
}
