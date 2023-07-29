# Notes

## Design

- unread messages properties
  - bg color - blue
  - red dot present
  - number of unread messages is reflected near notifications
- username is highlighted
- each message has 2 parts
  - photo (same position in all messages)
  - message
    - if a message has a photo it takes a seperate column
    - if it is has long message it takes the same column
- in mobile view size of "Notifications heading" and "Mark all as read" changes
- some components change color on hover

## Style

- Mobile: 375px
- Desktop: 1440px
- Font size (paragraph): 16px

## Interactive Parts

- red dot for unread messages
- unread messages are highlighted
- number of unread messages near heading
- on clicking 'Mark all as read', the number disappears, the messages are unhighlited and the red dot disappears
- on clicking a single unread message, it becomes read, hence the red dot disappears, the message is unhighlighted and number of notifications decrease by 1
