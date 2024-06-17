export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "Assignment",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};
