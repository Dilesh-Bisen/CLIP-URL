import { Request, Response } from 'express';
import { LinkModel } from '../models/linkModel';

export const createLink = async (req: Request, res: Response) => {
  try {
    const { originalLink } = req.body;

    if (!originalLink) {
      return res.status(400).send({ message: '❌ Original link is required' });
    }

    console.log(`🔗 Creating short link for: ${originalLink}`);
    const existingLink = await LinkModel.findOne({ originalLink });

    if (existingLink) {
      return res.status(409).send({ message: '🔄 Link already exists', data: existingLink });
    }

    const newLink = await LinkModel.create({ originalLink });
    res.status(201).send({ message: '🎉 Short link created', data: newLink });
  }
  catch (error) {
    console.error(`❌ Error creating link: ${(error as Error).message}`);
    res.status(500).send({ message: '❌ Failed to create link' });
  }
};

export const getAllLinks = async (req: Request, res: Response) => {
  try {
    const links = await LinkModel.find().sort({ createdAt: -1 });

    if (links.length === 0) {
      return res.status(404).send({ message: '🔍 No links found' });
    }

    res.status(200).send({ message: '✅ Links retrieved', data: links });
  }
  catch (error) {
    console.error(`❌ Error fetching links: ${(error as Error).message}`);
    res.status(500).send({ message: '❌ Failed to fetch links' });
  }
};

export const getLink = async (req: Request, res: Response) => {
  try {
    const shortLink = await LinkModel.findOne({ shortLink: req.params.id });

    if (!shortLink) {
      return res.status(404).send({ message: '🔍 Short link not found' });
    }

    shortLink.clicks++;
    await shortLink.save();
    res.redirect(shortLink.originalLink);
  }
  catch (error) {
    console.error(`❌ Error redirecting link: ${(error as Error).message}`);
    res.status(500).send({ message: '❌ Failed to redirect' });
  }
};

export const deleteLink = async (req: Request, res: Response) => {
  try {
    const deletedLink = await LinkModel.findByIdAndDelete(req.params.id);

    if (!deletedLink) {
      return res.status(404).send({ message: '🔍 Link not found' });
    }

    res.status(200).send({ message: '🗑️ Link deleted successfully' });
  }
  catch (error) {
    console.error(`❌ Error deleting link: ${(error as Error).message}`);
    res.status(500).send({ message: '❌ Failed to delete link' });
  }
};