# Favorites – store setup

The app code expects the same product identifier in both stores:

`findback_favorites`

This identifier is defined once in `services/purchase-storage.ts`. Do not create a
different identifier in either store without updating and rebuilding the app.

## App Store Connect

1. Create an **In-App Purchase** with type **Non-Consumable**.
2. Use product ID `findback_favorites`.
3. Set the Norwegian price to approximately NOK 30 and the US price to USD 2.99.
4. Add the required localized display name, description and review screenshot.
5. Attach the purchase to the FindBack 0.2.0 submission.
6. Confirm that Paid Apps agreements, tax and banking details are active.

Suggested review note:

> Tap the star below the information button to open FindBack Favorites. The
> purchase is a one-time, non-consumable unlock. Restore Purchase is available
> in the same dialog. The localized price is supplied by StoreKit.

## Google Play Console

1. Create an **In-app product / one-time product**.
2. Use product ID `findback_favorites`.
3. Set the base price to approximately NOK 30 / USD 2.99 and activate the product.
4. Add localized product name and description.
5. Test from an Internal testing build with a license tester account.

## Build and testing

`expo-iap` contains native code, so purchases cannot be tested in Expo Go. Create
an EAS development/internal build or a production build after the products exist.
The store account used for testing must be a sandbox tester or Play license tester.

The app caches a successful entitlement for offline use and checks ownership with
the store on later connections. Favorites and their names/coordinates are stored
only on the device and are not restored from the store.
