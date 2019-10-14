<template>
   <div class="myStyle">
       <svg  id="maps" :optionJsons ="optionJsons" style="position:absolute;left: 50%;top: 50%;margin-left:-2750px;margin-top: -1500px;\">
        </svg>
  </div>

</template>

<script>
export default {
    name: 'Pathecharts',
    props:["optionJsons"] ,
    data() {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    mounted() {
        // this.getData(); 
        this.drawLine();     
    },
    methods: {
        // getData() {
        //   let defer = $.Deferred();
        //   console.log( defer,d3)
        // },
    drawLine(){
        let graph = this.optionJsons;
     
        console.log(this.optionJsons);
        debugger
        let width =5500,height = 3000,svg,zoom;
        let myChart = this.$echarts.init(document.getElementById('maps'))
                    zoom = d3.behavior.zoom().scaleExtent([0.5, 10]).on("zoom", zoomed);
                    debugger
                    // console.log(d3)
                    svg = d3.select("svg#maps")
                        .call(zoom)
                        .on("dblclick.zoom", null)
                        .attr("width", width)
                        .attr("height", height)
                        .append("g");


                    let color = d3.scaleOrdinal(d3.schemeCategory10);
              
                    /**布局开始*/
                    let simulation = d3.forceSimulation()
                        .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(120))
                        .force("charge", d3.forceManyBody().strength(-100))
                        .force("center", d3.forceCenter(width/2 , height/2 ));
                    if(graph.nodes.length>100){
                        d3.select("svg#maps").attr('transform','translate(0,0)scale(0.4)')
                    }else{
                        d3.select("svg#maps").attr('transform','translate(0,0)scale(0.6)')
                    }

                    let link = svg.append("g")
                        .attr("class", "links")
                        .selectAll("line")
                        .data(graph.links)
                        .enter().append("line")
                        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

                    let node = svg.append("g")
                        .attr("class", "nodes")
                        .style("cursor","pointer")
                        .selectAll("circle")
                        .data(graph.nodes)
                        .enter().append("circle")
                        .attr("r", 6)
                        .attr("fill", function(d) { return color(d.group); })
                        .on("click",function(d){
                            let aa=window.open();
                            setTimeout(function(){
                                aa.location = d.url;
                            }, 100);
                        })
                        .call(d3.drag()
                            .on("start", dragstarted)
                            .on("drag", dragged)
                            .on("end", dragended));

                    let svg_text = svg.selectAll("text")
                        .data(graph.nodes)
                        .enter()
                        .append("text")
                        .style("fill","#333333")
                        .style("font-size","8px")
                        .style("font","微软雅黑")
                        .attr("dx",12)
                        .attr("dy",5)
                        .text(function(d){return d.id;});

                    node.append("title")
                        .text(function(d) { return d.id; });

                    simulation
                        .nodes(graph.nodes)
                        .on("tick", ticked);

                    simulation.force("link")
                        .links(graph.links);

                    /**更新连线坐标，对于每一个时间间隔*/
                    function ticked() {
                        link
                            .attr("x1", function(d) { return d.source.x; })
                            .attr("y1", function(d) { return d.source.y; })
                            .attr("x2", function(d) { return d.target.x; })
                            .attr("y2", function(d) { return d.target.y; });

                        node
                            .attr("cx", function(d) { return d.x; })
                            .attr("cy", function(d) { return d.y; });
                        svg_text
                            .attr("x", function(d){ return d.x; })
                            .attr("y", function(d){ return d.y; });
                        graph.nodes.forEach(function(d,i){
                            d.x = d.x - 80/2 < 0     ? 80/2 : d.x ;
                            d.x = d.x + 80/2 > width ? width - 80/2 : d.x ;
                            d.y = d.y - 20/2 < 0      ? 20/2 : d.y ;
                            d.y = d.y + 20/2  > height ? height - 20/2  : d.y ;
                        });

                    }
                    function zoomed() {
                        svg.attr("transform",
                            "translate(" + zoom.translate() + ")" +
                            "scale(" + zoom.scale() + ")"
                        );
                    }
                    function dragstarted(d) {
                        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                        d.fx = d.x;
                        d.fy = d.y;
                    }
                    function dragged(d) {
                        d.fx = d3.event.x;
                        d.fy = d3.event.y;
                    }
                    function dragended(d) {
                        if (!d3.event.active) simulation.alphaTarget(0);
                        d.fx = null;
                        d.fy = null;
                    }
        
    }
    }
    }
                    
      

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .myStyle{
    height: '500px';
    width: '100%';
    overflow: 'hidden';
    position:'relative';
 }
</style>
