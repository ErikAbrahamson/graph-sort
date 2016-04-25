(function(ns) {

    ns.graphSort = function(w) {
        w.on('beforeviewloaded', function(w, args) {
            var series = args.options.series,
                categories = [], axis;

            if (_.isArray(series)) {
                _.each(series[0].data, function(node) {
                    var obj =
                    {
                        name: node.selectionData[0],
                        index: node.queryResultIndex,
                        stackTotal: node.y
        			};
                    categories.push(obj);
        		});
            }

            categories.sort(function(a, b) {
                var aName = a.name.toLowerCase(),
                    bName = b.name.toLowerCase(),
                    aTotal = a.stackTotal,
                    bTotal = b.stackTotal;

                if (aTotal === bTotal) {
                    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
                } else {
                    return ((aTotal > bTotal) ? -1 : ((aTotal < bTotal) ? 1 : 0));
                }
            });

            var mappedIndex = _.map(categories, function(category, index) {
                return category.index;
            });
            categories = _.map(categories, function(category, index) {
                return category.name;
            });
            setTimeout(function() {
                axis = Highcharts.charts[0].xAxis[0];
                axis.setCategories(categories);
            }, 100);

            _.each(series, function(node) {
                var data = _.map(mappedIndex, function(mappedIndex, origIndex) {
                    return node.data[mappedIndex].y;
                });
                setTimeout(function() {
                    series = Highcharts.charts[0].series[0];
                    series.setData(data);
                });
            });
        });
    };
})(window);
