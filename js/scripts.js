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
                repoString += '<li>';
                repoString += '<a class="repo-name" href="' + this.html_url + '">' + this.name + '</a>';
                if (this.description) {
                    repoString += ': <span class="repo-description">' + this.description + '</span>';
                }
                if (this.homepage) {
                    repoString += ' - <a class="repo-homepage">' + this.homepage + '</a>';
                }
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
