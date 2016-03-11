console.log('JS loaded!');

// Step 1: Trigger: DOM is loaded, user/client triggers request
$(function() {
  loadBlabs(); // AJAX Request from Step 2
});

//======================= Helper Methods =======================//


// Step: 2: AJAX Request: Sends HTTP Request to the Server Side (Backend)
function loadBlabs() {
  $.ajax({
    method: "GET",
    url:    "/blabs"
  })

  // Success Error Catcher
  .then(
    function(data) {
      console.log("Success: ", data);
    },
    function(err) {
      console.log("Failure: ", err);
    })

    .then(
      function(blabs {
        console.log("rendering: ", blabs);
        var $blabsList = $('#blabs-list');
        var template = `
            <article class="blab blab-container">
              <a href="/blabs/<%= _id %>"><h3><%= name %></h3></a>
              <span>
              Created at, 5:00 AM, by
              <a href="/users/<%= creator %>"><%= creatorHandle %></a>
              </span>
              <button>upvote</button>vote count<button>downvote</button>
            </article>
        `;
      })
    )


};
