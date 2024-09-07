$(document).ready(() => {
    const AppWrapper = $("#AppWrapper");
    const AppSidebar = $("#AppSidebar");
    const AppContent = $("#AppContent");
    const AppSidebarHeader = $("#AppSidebarHeader");

    AppWrapper.addClass("d-flex vh-100");
    AppSidebar.addClass("border border-danger d-flex flex-column py-2");
    AppContent.addClass("border border-primary w-100");
    AppSidebarHeader.addClass("mb-5 container d-flex align-items-center");
});