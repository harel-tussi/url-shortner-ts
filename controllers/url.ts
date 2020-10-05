import { Request, Response } from "express";
import { IUrl } from "../types/url";
import { UrlModel } from "../models/url";

export const getUrl = async (req: Request, res: Response) => {
  const { shortUrl } = req.params;

  try {
    const url: IUrl | null = await UrlModel.findOne({ shortUrl });
    if (url) {
      return res.redirect(url.url);
    } else {
      throw new Error("Url Not Found");
    }
  } catch (e) {
    const message = (<Error>e).message;
    return res.status(500).send(message);
  }
};

export const addUrl = async (req: Request, res: Response) => {
  const { url } = req.body;
  try {
    const newUrl: IUrl = await new UrlModel({
      url,
    }).save();
    res.send(newUrl);
  } catch (error) {
    res.status(500).send("Could not short link");
  }
};
