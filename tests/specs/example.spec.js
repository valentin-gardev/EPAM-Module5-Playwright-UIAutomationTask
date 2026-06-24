// const { test } = require('../fixtures/fixtures')
const { test, expect } = require('@playwright/test')



test.describe('Login tests', () => {

    test('Should login successfully with valid credentials', async ({ page }) => {

        await page.goto('https://practicesoftwaretesting.com/auth/login');
        await page.locator('[data-test="email"]').fill('customer2@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();
        await expect(page.locator('[data-test="nav-menu"]')).toHaveText('Jack Howe')

    })

    test('Should login un-successfully with invalid password', async ({ page }) => {

        await page.goto('https://practicesoftwaretesting.com/auth/login');
        await page.locator('[data-test="email"]').fill('customer2@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').fill('welcome02');
        await page.locator('[data-test="login-submit"]').click();
        await expect(page.locator('[data-test="login-error"]')).toBeVisible() 
        
    })


})

test("Sort products from High to Low", async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com')
    await page.locator('[data-test="sort"]').selectOption('price,desc');
    // wait for fix, wait for all items to be not hidden, fix it like that
    await expect(page.locator('[data-test="product-price"]').first()).toHaveText('$89.55', {timeout: 10000})

    const allElemenPrices =  page.locator('.container [data-test="product-price"]')
    const allPriceText = await allElemenPrices.allTextContents();
    const allPriceArr = allPriceText.map(text => parseFloat(text.replace('$', '')))

    const sortedItems = [...allPriceArr].sort(function(a,b) {return b-a})
    expect(allPriceArr).toEqual(sortedItems)
})

test('Adding product to favourites/ not logged in/', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com')
    const cardItems = await page.locator('a.card')
    await expect(cardItems.first()).toBeVisible()
    await cardItems.first().click()
    
    await expect(page).toHaveURL(/product/)
    await page.locator('[data-test="add-to-favorites"]').click()
    await expect(page.locator('.toast-top-right.toast-container')).toBeVisible()
})