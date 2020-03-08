// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomFacts() {
  const facts =
      ['I am from Grand Rapids, MI', 'I go to the University of Michigan', 
      'My family is from the Dominican Republic', 'Hablo Español'];

  // Pick a random greeting.
  const fact = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const factsContainer = document.getElementById('facts-container');
  factsContainer.innerText = fact;
}

function getData() {
  fetch('/data')  // sends a request to /my-data-url
  .then(response => response.json()) // parses the response as JSON
  .then((comments) => { // now we can reference the fields in myObject!
    const commentListElement = document.getElementById('comment-list');
    comments.forEach((comment) => {
      commentListElement.appendChild(createCommentElement(comment));
    })
  });
}

function createCommentElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
