//http://www.redcodebluecode.com/blog/adding-comments-to-a-blog-part-2-the-frontend
//http://www.webtrainingcentre.com/javascript-solutions/dynamically-create-an-unordered-list-in-javascript/
//https://github.com/robertttamayo/redcodebluecode.com/blob/master/public/assets/js/module/Comments.js

var Comments = (function(){
    
    var _init = function(){
        console.log('initialize commneting section');
        for(var i = 0; i < comments.length; i++) {
                render(comments[i], i);
        }
        
        
         $('body').on('click', '.comment-reply', function(){
            var blogComment = $(this).closest('.blog-comment');
            blogComment.addClass('reply-active');
        });
    }
    
    var addSubmit = function() {
         
        $('body').on('click', '.comment-reply', function(){
            var blogComment = $(this).closest('.blog-comment');
            blogComment.addClass('reply-active');
        });
        
        $('body').on('click', '.view-replies', function(){
            console.log('click on reply'+this);
            let id = this.id;
            let childrens = comments.filter(ele => ele.id == id).map(ele => ele.childrens);
            
            var blogComment = $(this).closest('.blog-comment');
            var commentid = blogComment.attr('data-comment-id');
            blogComment.attr('data-replies-visible', "true");
            
            for(var i = 0; i < childrens[0].length; i++) {
                var html =  `<div class="comment-content blog-comment-reply-section blog-comment">`+childrens[0][i].desc+`</div>`
                $('.comment-replies-content[data-commentid=' + commentid + ']').append(html);
            }
        });
    }
    
    
    $(document).ready(function(){
        _init();
    });
    
    
    var render = function(data, index) {
         var html = `
                    <div class="blog-comment" data-replies-visible="false" data-comment-id=`+data.id+`>
                    <div class="commentor-name">`+data.user_name+`</div>
                    <div class="comment-content">`+data.desc+`</div>
                    <div class="comment-replies comment-reply-count-{{hasreplies}}">
                     <div id=`+data.id+` class="comment-replies-title view-replies" data-replies-loaded="false">Show 10 Replies <i class="fas fa-angle-down"></i></div>
                    <div class="hide-replies">Hide Replies <i class="fas fa-angle-up"></i></div>
                    <div class="comment-replies-content" data-commentid=`+data.id+`></div>
                    </div>


                    <div class="comment-reply"><i class="fas fa-reply"></i> Reply</div>

                    <div class="comment-leave-a-reply comment-form" data-replyto=`+data.id+`>
                        <div class="enter-comment">
                          <textarea class="leave-a-comment" name="comment" placeholder="Leave a reply..."></textarea>
                        </div>
                        <input style="display: none;" type="hidden" name="replyto" value="1"> 
                        <div class="submit-reply submit-comment" >Reply</div>
                    </div>             
                </div>
                  `;
        
         $('#content').append(html);
    };
    
    
    return { 
        
        addSubmit: function() {
            addSubmit();
        }
        
    }
})();