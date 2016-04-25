# Highcharts Graph Sorter

Used to sort Highcharts bar graphs in SiSense

## Instructions

1. Navigate to `X:\Program Files\Sisense\PrismWeb\plugins\`
2. Create a new folder named `graphSort` and paste the files in this directory into the new folder.
3. In your SiSense dashboard, navigate to the particular widget you'd like to run the code on
4. Inside the widget view, click on the hamburger menu, then click _Edit Script_.
5. Copy and paste the following code:

```javascript
widget.on('initialized', function() {
    graphSort(widget);
});
```
