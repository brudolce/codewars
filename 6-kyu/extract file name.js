class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.match(/[^\d][\w_-]+\.[\w]+/)[0].slice(1);
    }
}

//best solution from codewars
class FileNameExtractor {
  static extractFileName = dirty => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];
}
