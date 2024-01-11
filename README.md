# Welcome to my assessment for Coinmerce

## Technical Assignment:

1. You must use NextJS.
2. You are allowed to use libraries to help you build.
3. You can use Mockoon (https://mockoon.com/) to mock the API endpoint (other API mock tool you’re more familiar with is also fine).
4. Use git to record your changes.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Focus point

This technical assignment is a nice challenge to showcase certain skills and way of thinking.
Even though I could've spend much more time on this project, I decided to focus mostly on one specific area to give a taste of my technical skill. During the interview I was told the assignment would take about 4h; hence choosing and focussing on a certain aspect.
I also left some things out. E.g; I didn't focus too much on details of the design and icons. I did use Figma to see what margins and paddings were used, color references, and in certain places also applied them. Even though I assume you want to see the full picture of my skills, I decided to focus on writing the logic part instead of design. Therefor I also used the colors provided by tailwind instead of updating the theme and using the colors provided in Figma.

### Structure and reusability

I've structured the project from an as logical possible view. I try to place the components that belong with each other and give them clear descriptive names.
You can also notice that I didn't add stand-alone files, like `Button.tsx`. Rather I put them inside a folder (`Button/index.tsx`), this in preparation for other files like `.test.` files and taking in account that these files can grow and we can split them up a bit more so it's easier to update and read through them.

### Password component

I decided to focus on the password input, because that has a lot of handling that needs to be taken care of.
The password has 5 validation requirements to which it should comply to.
In terms of reusability, I added some extra functionality by adding an extra prop to this component where the developer can decide which validation is enabled. This way the password input can be validated differently in different places when/if needed.

example of how to pass validation rules

```tsx
/**
 * Certain amount of rules
 * Validates only the cases that are provided
 */
<PasswordInput rules={["lowercase", "number"]} />

/**
 * When no rules are provided, all rules are active (applied)
 */
<PasswordInput  />
```

By passing the rules specifically, we enable only the provided rules. When no rules are provided, all rules are applied.

### Next, React and Typescript

During this test I showcase my React skills by using (and therefor understanding) certain React best practices by not causing any unnecessary rendering, hydration or storing of data. By using `useMemo`, `useState` and `useEffect`.

Regarding Typescript I like to have my code strictly typed where possible.
Among developers there is always a discussion about `type vs interface`. I use both, but I distinguish when I use one or the other.
Basically, whenever I'm describing a blueprint of a component I use `interface`.

```
{
  name: Michael Koek
  profession: Front-end developer
  github: michaelkoek
}
```
