import { it, describe } from "vitest";
import {
  render,
  screen,
  renderHook,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import { setupServer } from "msw/node";
import VideoDetails from "../components/VideoDetails";
import { rest } from "msw";
import {
  testingResponse,
  renderWithClient,
  testingResponseWithNoTitle,
} from "./utils";
import "whatwg-fetch";
import "@testing-library/jest-dom";

export const handlers = [
  rest.get("https://youtube-v31.p.rapidapi.com/videos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testingResponse));
  }),
];

export const server = setupServer(...handlers);

describe("videoDetails tests", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("like and dislike should be disabled", async () => {
    const result = renderWithClient(<VideoDetails />);
    const likeButton = await result.findByLabelText("like button");
    const dislikeButton = await result.findByLabelText("dislike button");

    expect(likeButton.children[0]).toHaveClass("text-black");
    expect(dislikeButton.children[0]).toHaveClass("text-black");
  });

  it("Only Like Should be active", async () => {
    const result = renderWithClient(<VideoDetails />);

    const likeButton = await result.findByLabelText("like button");
    const dislikeButton = await result.findByLabelText("dislike button");

    fireEvent.click(likeButton);

    expect(likeButton.children[0]).toHaveClass("text-white");
    expect(dislikeButton.children[0]).toHaveClass("text-black");
  });

  it("Only Dislike Should be active", async () => {
    const result = renderWithClient(<VideoDetails />);

    const likeButton = await result.findByLabelText("like button");
    const dislikeButton = await result.findByLabelText("dislike button");

    fireEvent.click(dislikeButton);

    expect(dislikeButton.children[0]).toHaveClass("text-white");
    expect(likeButton.children[0]).toHaveClass("text-black");
  });

  it("Should toggle description", async () => {
    const result = renderWithClient(<VideoDetails />);

    const toggleDescriptionBtn = await result.findByLabelText(
      "toggle description"
    );

    expect(toggleDescriptionBtn).toHaveTextContent("Show More");

    fireEvent.click(toggleDescriptionBtn);

    expect(toggleDescriptionBtn).toHaveTextContent("Hide");
  });
  it("fetch should fail and error message should appear", async () => {
    server.use(
      rest.get("https://youtube-v31.p.rapidapi.com/videos", (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    const result = renderWithClient(<VideoDetails />);

    const errorMessage = waitFor(() =>
      result.getByText("Something went wrong :(")
    );

    expect(await errorMessage).toBeInTheDocument();
  });
  it("title is not provided", async () => {
    server.use(
      rest.get("https://youtube-v31.p.rapidapi.com/videos", (req, res, ctx) => {
        return res(ctx.json(testingResponseWithNoTitle));
      })
    );

    const result = renderWithClient(<VideoDetails />);

    const title = waitFor(() => result.getByText("not provided"));

    expect(await title).toBeInTheDocument();
  });
});
