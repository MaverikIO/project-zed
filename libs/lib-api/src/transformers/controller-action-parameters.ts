
import * as ts from 'typescript';


const transformer: ts.TransformerFactory<ts.SourceFile>  = context =>  {

    return sourceFile => {
        function visitor( node: ts.Node ): ts.Node {
            return ts.visitEachChild(node, visitor, context)
        }
    
        return ts.visitNode(sourceFile, visitor)
    }

}

export default transformer;