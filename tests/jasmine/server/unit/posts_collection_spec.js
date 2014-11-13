"user strict";

describe("Meteor Post Methods", function(){

   beforeEach(function () {
     MeteorStubs.install();
     mock(global, 'Posts');
     mock(global, 'Meteor');
   });

  afterEach(function () {
    MeteorStubs.uninstall();
  });

  describe("createPost", function(){
    it("Should be created with a title and a body", function(){

      spyOn(Meteor, "userId").and.returnValue("userId");
      spyOn(Posts, "insert").and.returnValue("testId")
      var options = {
          title: "test title"
          , body: "test body"
      };

      PostsService.createPost(options);

      expect(Meteor.userId.calls.count()).toEqual(1);
      expect(Posts.insert).toHaveBeenCalledWith({
            owner: "userId"
            , title: "test title"
            , body: "test body"
      });
    });

    it("Should throw an error unless user is loggedin", function(){
      spyOn(Meteor, "userId").and.returnValue(null);
      spyOn(Posts, "insert").and.returnValue("testId")
      var options = {
          title: "test title"
          , body: "test body"
      };

      expect(function () {
        PostsService.createPost(options)
      }).toThrow();
      
    });

    it("Does not allow for empty title", function(){
      spyOn(Meteor, "userId").and.returnValue("1");
      spyOn(Posts, "insert").and.returnValue("testId")
      var options = {
          title: ""
          , body: "test body"
      };

      expect(function () {
        PostsService.createPost(options)
      }).toThrow();
    });

  });

  describe("getPosts", function(){
    it("Should list posts by reverse creation date when fethced", function(){

    });
  });

  describe("updatePost", function(){
    it("Should be updateable in both title and body", function(){

    });

    it("Should only be updatable by its owner", function(){

    });
  })

  describe("deletePost", function(){
    it("Should only be detelable", function(){

    });

    it("Should only be detelable by its owner", function(){

    });
  });

});