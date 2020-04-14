# useHover

## Installation

```jsx
npm i use-observer-hook
```


## Usage

```jsx
function App() {
  const [hoverRef, isHovering] = useHover(() => {
    // do whatever
  });

  return (
    <div>
      <div ref={hoverRef}>
        some content
      </div>
      {isHovering ? "yes" : "no"}
    </div>
  );
}
```
