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
                var repoString = "";
                repoString += '<li class="repo">';
                repoString += '<a class="repo-name" href="' + this.html_url + '">' + this.name + '</a>';
                repoString += '<ul class="repo-info">';
                if (this.description) {
                    repoString += '<li class=""><span class="title">Overview: </span>' + this.description + '</li>';
                }
                if (this.homepage) {
                    repoString += '<li class="repo-homepage"><span class="title">Homepage: </span><a>' + this.homepage + '</a></li>';
                }
                repoString += '</ul>'
                repoString += '</li>';
                reposEl.append( repoString );
                reposCount++;
            }
        });
        if (reposCount == 0) {
            reposEl.append('<li class="alert">Nothing here yet. Check back later</li>');
        }
        reposEl.show();
    });

})(jQuery);
