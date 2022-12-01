import { it, describe } from "vitest";
import { render, screen, renderHook, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import VideoDetails from "../components/VideoDetails";
import { rest } from "msw";
import { testingResponse, renderWithClient, createWrapper } from "./utils";
import { useVideoDetails } from "../hooks/useVideoDetails";
import "whatwg-fetch";
import { handlers } from "./videoDetails.test";

const server = setupServer(...handlers);

describe("testing hooks", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("video details hook", async () => {
    const { result } = renderHook(() => useVideoDetails(""), {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.data?.kind).toBe("youtube#videoListResponse");
  });
});
