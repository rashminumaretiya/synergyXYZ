export function isElementHorizontallyCentered(element, tolerance = 50) {
  const rect = element.getBoundingClientRect();

  // Get the viewport width
  const viewportWidth = window.innerWidth;

  // Calculate the center of the viewport
  const viewportCenterX = viewportWidth / 2;

  // Calculate the center of the element horizontally
  const elementCenterX = rect.left + rect.width / 2;

  // Check if the element's center is within a tolerance range of the viewport's center
  return Math.abs(viewportCenterX - elementCenterX) <= tolerance;
}
