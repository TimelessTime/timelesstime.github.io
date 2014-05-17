(function($){

    var githubUser = "timelesstimeltd";
    var rootGHSite = githubUser+".github.io";

    "use strict"

    $.getJSON("https://api.github.com/users/"+githubUser+"/repos?type=open", function(repos) {
        var reposCount = 0;
        var reposEl = $("#github-repos");
        reposEl.children(".gh-loading").remove();
        $(repos).each(function() {
            if (this.name != rootGHSite) {
                reposEl.append('<li><a href="'+ this.html_url +'">' + this.name + '</a></li>');
                reposCount++;
            }
        });
        if (reposCount == 0) {
            reposEl.append('<li class="alert">Nothing here yet. Check back later</li>');
        }
        reposEl.show();
    });

})(jQuery);
