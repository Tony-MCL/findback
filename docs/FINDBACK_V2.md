# FindBack v2 – Locked specification

## Purpose

FindBack v2 adds one paid feature to the existing app: **Favorites**.

The app must remain a small, focused “paperclip app” that solves one problem well. Version 2 must not turn FindBack into a broad location manager.

## Free version

The free version remains unchanged:

- Save one position.
- Open that position in the user’s map app.
- No account.
- No ads.
- No subscription.
- Data stored locally on the device.

The paid feature must not weaken or restrict the existing free experience.

## Paid feature

### Product

**Favorites**

### Pricing model

- One-time purchase.
- Suggested price: **USD 2.99 / NOK 30**.
- No subscription.
- No hidden costs.
- One product only.
- Unlimited number of favorites.
- No lower tier with a fixed limit.

The user is buying Favorites as a feature, not a plan, tier or subscription.

## Entry point

- Add a star button below the information button.
- Tapping the star opens the Favorites flow.

### User has not purchased Favorites

Show a compact purchase modal containing:

- A short explanation of what Favorites provides.
- Unlimited saved favorite positions.
- One-time purchase.
- No subscription.
- The localized store price.
- A button that starts the platform purchase flow.
- A secondary “Not now” action.

### User has purchased Favorites

Open the Favorites modal.

## Favorites modal

The modal should stay compact.

### Favorites list

- Existing favorites appear first.
- The list is shown inside an expandable/collapsible section.
- The section may be collapsed to keep the modal small.
- When expanded, the list is scrollable.
- The list may contain as many favorites as the user chooses to create.
- The app must not impose a visual or product limit on the number of favorites.
- When no favorites exist, show a short empty-state message instead of an empty list.

### Add actions

Below the favorites list, provide:

1. **Add last saved position**
2. **Add current position**

“Add current position” must use the same location permission and error handling principles as the existing save-position flow.

## Favorite data model

Each favorite should contain at least:

- `id`
- `latitude`
- `longitude`
- `name`
- `createdAt`

All favorites remain stored locally on the device unless a later version explicitly changes this rule.

## Default names

- A new favorite receives a localized date-and-time stamp as its initial name.
- The format must follow the user’s device language and regional settings.
- The user is not required to enter a name when creating a favorite.

Examples:

- Norwegian locale: `31.07.2026 08:14`
- English locale: use the device’s normal localized date and time format.

## Favorite interactions

### Tap

- Tapping a favorite opens that position directly in the user’s map app.

### Long press

- Long-pressing a favorite opens name editing only.
- The user may replace the date-and-time name with a custom name.
- No additional edit screen, categories, tags or settings are included.

### Swipe to delete

- Swiping a favorite deletes it.
- Do not show a confirmation dialog.
- Show a toast for approximately two seconds with an Undo action.

Toast example:

> **Hytta slettet**
>
> **Angre**

The toast must use the favorite’s name at the moment it was deleted.

During the undo window, temporarily retain the complete deleted favorite, including:

- name
- coordinates
- creation timestamp
- original list position

If the user taps Undo, restore the favorite exactly as it was and in the same list position.

## Purchase handling

The implementation must support platform purchases on both Android and iOS.

Required behavior:

- Purchase Favorites once.
- Persist entitlement locally and verify it through the relevant store mechanisms.
- Provide a way to restore purchases where required or expected by the platform.
- The localized price shown in the app must come from the store, not be hard-coded into the interface.

## Explicitly out of scope for v2

Do not add:

- Multiple paid tiers.
- Limits such as 10 or 20 favorites.
- Subscription plans.
- Accounts or login.
- Cloud backup or synchronization.
- Sharing.
- Folders.
- Categories.
- Tags.
- Notes.
- Photos.
- Search unless real use later demonstrates that it is necessary.
- A general favorites-management screen.
- Automatic place-name lookup.
- Any feature unrelated to saving and reopening positions.

## Product principle

The free version delivers the complete core promise:

> Save one place and find your way back.

The paid feature extends the same promise without changing the identity of the app:

> Keep multiple places and return to any of them later.

The guiding rule for FindBack remains:

> **Not more. Not less.**
